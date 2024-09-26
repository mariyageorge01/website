import type { UserConfig } from "@commitlint/types";
import { RuleConfigSeverity } from "@commitlint/types";

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
//   parserPreset: "conventional-changelog-atom",
  formatter: "@commitlint/format",
  rules: {
    "type-enum": [RuleConfigSeverity.Error, "always", ["foo"]],
    "signed-off-by": [RuleConfigSeverity.Error, "always", "Signed-off-by"], // Ensure commit message contains Signed-off-by
  },
};

export default Configuration;
