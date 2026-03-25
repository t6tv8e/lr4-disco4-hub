import { Suspense } from "react";
import { getAllFaultCodes } from "@/lib/content";
import FaultCodeList from "./fault-code-list";

export const metadata = {
  title: "Fault Code Lookup",
  description: "Look up OBD fault codes for the Land Rover Discovery 4 / LR4. Find related known issues, symptoms, and fixes.",
};

export default function FaultCodesPage() {
  const faultCodes = getAllFaultCodes();

  const totalIssueLinks = faultCodes.reduce((sum, fc) => sum + fc.issues.length, 0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-2">Fault Code Lookup</h1>
        <p className="text-[var(--foreground-muted)] text-sm">
          {faultCodes.length} fault codes found across {totalIssueLinks} issue references.
          Type a code to find related known issues.
        </p>
      </div>

      <Suspense fallback={<div className="text-sm text-[var(--foreground-muted)]">Loading...</div>}>
        <FaultCodeList codes={faultCodes} />
      </Suspense>
    </div>
  );
}
