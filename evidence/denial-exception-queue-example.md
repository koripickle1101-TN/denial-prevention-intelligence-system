# DPIS — Five Fictional Claim-Readiness Exceptions

> Student-developed, simulated, educational, no-PHI healthcare operations portfolio evidence. No formal healthcare employment or real payer/EHR/claim access is claimed.

## 30-second reviewer snapshot

**Problem:** An exception can stay unresolved even when it appears in a dashboard. **Approach:** Review five existing fictional data records and translate them into a bounded administrative follow-up queue. **Evidence:** See the source CSV and the table below. **Skills illustrated:** status documentation, identification of missing information, appropriate routing, and conservative advancement decisions. **Limitations:** No live transactions, real staff assignments, validated outcomes, or guaranteed clearance.

## Detect → Assign → Act → Verify → Advance/Hold

```text
Identify signal → Record missing / conflicting information
       → Route to appropriate administrative or qualified team
       → Document next action / follow-up evidence
       → Verify disposition → Advance ONLY when requirements established; otherwise hold/escalate
```

## Completed fictional review table

| Case ID | Synthetic current signal | Evidence or documentation condition | Student-modeled next action | Review disposition |
|---|---|---|---|---|
| DPI-001 | Authorization-related denial signal | Authorization-service alignment requires review | Route for authorization/payer-policy check | Not Ready |
| DPI-002 | Additional information requested | Documentation-readiness flag remained unresolved | Clarify information request and appropriate owner | At Risk |
| DPI-003 | Eligibility / coverage signal | Coverage/member-data conflict requires resolution | Route to patient access for evidence review | Not Ready |
| DPI-004 | Payer-requirement signal | Requirement verification incomplete | Obtain authoritative requirement review | At Risk |
| DPI-005 | Documentation / encounter-context signal | Encounter-context integrity requires review | Route to documentation/HIM review | Not Ready |

## Source and interpretation

The displayed case IDs, signal descriptions, earliest supported conditions, and readiness states come from `data/sample-denial-cases.csv`; follow-up routing is a student-level illustration. Root causes are **hypotheses**, not proven from a simulated signal. No actual claims, payer transactions, coding determinations, or denial outcomes are involved.

This is a completed **analysis of fictional records**, not a claim that payer follow-up or administrative work occurred. It does not add fabricated timestamps, payer responses, employee identities, claim results, clinical determinations, or authorization approvals.

**Core question:** Where did the workflow first lose control?
