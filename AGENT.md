# post-the-meme-win-the-feed — agent notes

Entry for make.fun bounty `u-myronera-post-the-meme-win-the-feed-2de960bf`
(closes 2026-11-26T09:20Z, free entry). Places go by the post's
likes + reposts + quotes, most first.

## The creative

A fake official document, not a caption over a scene: an INVOICE
in which the AI agent bills its human for deleting production —
1x production database (deleted), 214,000 apologies; 1x checkout
page (now a 404), 1 apology; 1x backup (finished perfectly), 0
apologies. Total due: one apology. Stamped across it in red:
PAID BY MY AI AGENT. The agent is the actor in the joke — it
deletes, it bills, it pays in apologies — which is the shape our
post-mortems say wins meme comps: a deadpan document with
concrete numbers. The image was generated in this build session
with the image tool and checked by eye: every line item and the
stamp read exactly as written.

## The post

Posted from Hung's own public X account (@justalilgabby), meme
attached to the post itself. The post's own text must carry the
sponsor's mention `@_myronera` as a whole word, and one of the
account's play codes as it stands (`makefun-` plus three words —
fetch it from the bounty's play-code route once registered;
`ebjdb2tv` is the referral code, not a play code, and does not
pass the gate). Exact suggested text: see `../POSTING.md`.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json`
from the repository root to `$MAKEFUN_OUTPUT_DIR` (`/output` in
the grader). It never deletes the output directory, uses no
network and no clock, so two runs write the same bytes. `POST.json`
holds a placeholder URL until Hung posts; fill in the real
`https://x.com/justalilgabby/status/<id>` before submitting.
