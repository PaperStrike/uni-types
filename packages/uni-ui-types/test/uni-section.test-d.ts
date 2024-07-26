import type {
  UniSection,
  UniSectionInstance,
  UniSectionOnClick,
  UniSectionProps,
  UniSectionType,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniSection", () => {
  expectTypeOf<UniSectionType>().toBeString();
  expectTypeOf<UniSectionType>().toEqualTypeOf<UniHelper.UniSectionType>();

  expectTypeOf<UniSectionOnClick>().toBeFunction();
  expectTypeOf<UniSectionOnClick>().toEqualTypeOf<UniHelper.UniSectionOnClick>();

  expectTypeOf<UniSectionProps>().toBeObject();
  expectTypeOf<UniSectionProps>().toEqualTypeOf<UniHelper.UniSectionProps>();

  expectTypeOf<UniSection>().not.toBeAny();
  expectTypeOf<UniSection>().toEqualTypeOf<UniHelper.UniSection>();

  expectTypeOf<UniSectionInstance>().not.toBeAny();
  expectTypeOf<UniSectionInstance>().toEqualTypeOf<UniHelper.UniSectionInstance>();
});