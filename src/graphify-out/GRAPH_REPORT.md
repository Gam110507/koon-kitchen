# Graph Report - src  (2026-06-22)

## Corpus Check
- 23 files · ~6,580 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 66 nodes · 72 edges · 9 communities (7 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]

## God Nodes (most connected - your core abstractions)
1. `FadeUp()` - 7 edges
2. `readReservations()` - 3 edges
3. `writeReservation()` - 3 edges
4. `POST()` - 2 edges
5. `GET()` - 2 edges
6. `Footer()` - 2 edges
7. `MaterialIcon()` - 2 edges
8. `schemaTypes` - 2 edges
9. `metadata` - 1 edges
10. `reservationSchema` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (9 total, 2 thin omitted)

### Community 1 - "Community 1"
Cohesion: 0.20
Nodes (6): inter, metadata, playfairDisplay, Footer(), legalLinks, navLinks

### Community 2 - "Community 2"
Cohesion: 0.19
Nodes (6): metadata, FadeUp(), FadeUpProps, metadata, categories, galleryImages

### Community 3 - "Community 3"
Cohesion: 0.29
Nodes (5): MaterialIcon(), MaterialIconProps, FormData, initialFormData, timeOptions

### Community 5 - "Community 5"
Cohesion: 0.40
Nodes (3): categories, MenuItem, menuItems

### Community 6 - "Community 6"
Cohesion: 0.36
Nodes (7): DATA_DIR, DATA_FILE, GET(), POST(), readReservations(), reservationSchema, writeReservation()

## Knowledge Gaps
- **23 isolated node(s):** `metadata`, `reservationSchema`, `DATA_DIR`, `DATA_FILE`, `metadata` (+18 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `FadeUp()` connect `Community 2` to `Community 3`, `Community 4`, `Community 5`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._
- **What connects `metadata`, `reservationSchema`, `DATA_DIR` to the rest of the system?**
  _23 weakly-connected nodes found - possible documentation gaps or missing edges._