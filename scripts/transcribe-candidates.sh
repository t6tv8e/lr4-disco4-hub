#!/bin/bash
# Transcribe video candidates using EasyTranscriber API
# Run this locally (not from a server blocked by Vercel WAF)

API_KEY="${ET_API_KEY:-et_mMSJJiKcBsmQdvjXypA5MB351s8psAeYAQPVMbO7}"
BASE_URL="https://easytranscriber.com/api/v1"
OUTPUT_DIR="$(dirname "$0")/../data/transcripts"

mkdir -p "$OUTPUT_DIR"

# Tier 1 videos (highest priority)
VIDEOS=(
  "2-xT_DvVzsw"
  "AvPACAJDS8w"
  "aMTYtf7ES-Q"
  "4cObPBU7jzk"
  "6oFE90_BgpM"
  "9XCJ6BU-Z9o"
  "CWfm65Un2HM"
  "9EVmlHqlDIY"
  "ecjQTGgO33E"
  "CjfhywdHAic"
  "ayqgNx9QyM4"
  "8Yod0OtMPco"
)

echo "Transcribing ${#VIDEOS[@]} Tier 1 videos..."
echo ""

for vid in "${VIDEOS[@]}"; do
  outfile="$OUTPUT_DIR/${vid}.json"
  
  if [ -f "$outfile" ]; then
    echo "⏭️  $vid — already transcribed, skipping"
    continue
  fi
  
  echo "📝 Transcribing $vid..."
  
  # Get transcript
  response=$(curl -s "$BASE_URL/transcribe?url=https://www.youtube.com/watch?v=${vid}" \
    -H "x-api-key: $API_KEY")
  
  echo "$response" > "$outfile"
  
  # Check if successful
  if echo "$response" | grep -q '"transcript"'; then
    echo "   ✅ Done"
  else
    echo "   ❌ Failed: $(echo "$response" | head -c 100)"
  fi
  
  # Get summary
  summary_response=$(curl -s -X POST "$BASE_URL/summarize" \
    -H "x-api-key: $API_KEY" \
    -H "Content-Type: application/json" \
    -d "{\"url\": \"https://www.youtube.com/watch?v=${vid}\"}")
  
  echo "$summary_response" > "$OUTPUT_DIR/${vid}-summary.json"
  
  sleep 2  # Rate limiting
done

echo ""
echo "Done! Transcripts saved to $OUTPUT_DIR"
echo "Next step: run the content generator to create video .md files"
