import assert from "node:assert/strict";
import test from "node:test";
import { resolveMatchState } from "../src/shared/lib/matchState.js";

const now = Date.parse("2026-09-14T12:00:00Z");
test("past scheduled match is archived, not upcoming", () => {
  assert.equal(resolveMatchState({status: "scheduled"}, new Date("2025-07-27"), now), "archived");
});
test("future fixture remains upcoming", () => {
  assert.equal(resolveMatchState({status: "scheduled"}, new Date(now + 3600000), now), "upcoming");
});
test("recorded scores and finished status are preserved", () => {
  assert.equal(resolveMatchState({result_label: "2:0"}, new Date(now - 3600000), now), "finished");
  assert.equal(resolveMatchState({status: "finished"}, null, now), "finished");
});
test("stale live marker does not claim a current broadcast", () => {
  assert.equal(resolveMatchState({status: "live"}, new Date(now - 86400000), now), "archived");
  assert.equal(resolveMatchState({status: "live"}, new Date(now - 3600000), now), "live");
});
