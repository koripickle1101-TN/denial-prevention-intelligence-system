# DPIS™ Phase 1 — End-to-End Evidence Validation

**Student-developed, simulated, no-PHI healthcare operations portfolio project.** Created by Kori Pickle. This is an educational decision-state demonstration, not an operational claims processing, EHR, coding, payer or medical-necessity system.

## Reused source and existing functionality
- `data/sample-denial-cases.csv`: existing synthetic **DPI-001**, Example Plan A, Advanced Imaging, authorization-related denial signal.
- `claim-readiness-adjudication-signal-control.html`: existing pre-submission and downstream training concepts.
- `claim-transmission-acknowledgement-control.html`: existing transmission/payer-handoff concepts.
- `denial-resolution-prevention-loop.html`: existing account resolution versus recurrence prevention.
- `style.css`: existing Newsreader/Inter, white/black/Tennessee Orange visual system.

Existing individual labs remain unchanged. The new `end-to-end-evidence-validation.html` is a **connected educational walkthrough**, not a claim of shared production-state synchronization among separate modules.

## DPI-001 source observations
- **Visible signal:** an authorization-related denial signal in synthetic denial/AR review.
- **Available fictional evidence:** the authorization record does not align with the planned service.
- **Earliest condition supported:** authorization-to-service alignment requires review.
- **Hypothesis, not proof:** an upstream authorization requirement/alignment gap may have contributed.
- **Route:** authorization workflow owner, subject to review.
- **Unknown:** actual payer determination, original causal point, real coverage, coding, medical necessity, reimbursement.
- **Example source closure text:** “Modeled alignment reviewed and disposition documented” is dataset narrative, **not proof** that a lab user has resolved the active simulated case.

## Worked example and expected statuses
| Action/input | Expected result |
|---|---|
| Start with DPI-001: eligibility unknown, authorization unresolved, documentation unknown, claim readiness unknown | HOLD |
| Review fictional eligibility, documentation and claim information, leave authorization unresolved | HOLD |
| Review a coding-related signal requiring qualified review, with other checkpoints supported | ROUTE |
| All four modeled checkpoints reviewed and supported | READY (educational pre-submission status only) |
| Select the original synthetic payer-denial signal | ROUTE for evidence review, *not proven cause* |
| Select transmission/clearinghouse rejection instead | Separate rejection category; do not label a denial |
| Evidence of a downstream signal unavailable | HOLD |
| Earliest checkpoint not identified | ESCALATE / investigate |
| Transfer case to a person but leave exception open | HOLD |
| Mark action documented without verified resolution evidence | HOLD |
| Provide modeled evidence, owner, next action, verified disposition, resolved exception, supported upstream state and reviewed downstream signal | CLOSED (simulated only) |

## Evidence / action boundary
The downstream denial or rejection is a **signal**, not proof of upstream cause. The case can support the conclusion that the authorization alignment *needs review* without establishing the original source of failure. Routing and escalation do not equal closure.

The lab evaluates READY/HOLD/ROUTE/ESCALATE and separately CLOSED. A simulated "CLOSED" label requires a verified-evidence choice plus a written fictional closure note; the program does **not** independently authenticate a user's typed claim. This is therefore **consistency validation**, not proof of a real-world resolution.

## Repeatable tests
The independent Node built-in test runner executes 15 assertions:

```bash
node --test tests/phase1-validation.test.cjs
```

No third-party JavaScript dependency is required. The tests cover missing/unknown evidence, unresolved authorization, qualified routing, signal classification, absent payer signal, unsupported causation, owner assignment, escalation, closure evidence, readiness and positive simulated closure.

Tests are not equivalent to browser interaction, accessibility, mobile visual QA, hosted deployment verification, or independent validation against production healthcare requirements.

## Files for this phase
- `end-to-end-evidence-validation.html` — workflow UI
- `phase1-validation.js` — independent pure decision functions and UI bindings
- `tests/phase1-validation.test.cjs` — repeatable checks
- `index.html` — navigation to the new lab
- `docs/phase1-end-to-end-validation.md` — this case and verification plan

**No changes to the five-case source CSV or original work queue.** No PHI, employer data, actual claims or payer data.
