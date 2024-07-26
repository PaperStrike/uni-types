import type {
  UniCard,
  UniCardInstance,
  UniCardOnClick,
  UniCardOnClickType,
  UniCardProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniCard", () => {
  expectTypeOf<UniCardOnClickType>().toBeString();
  expectTypeOf<UniCardOnClickType>().toEqualTypeOf<UniHelper.UniCardOnClickType>();

  expectTypeOf<UniCardOnClick>().toBeFunction();
  expectTypeOf<UniCardOnClick>().toEqualTypeOf<UniHelper.UniCardOnClick>();

  expectTypeOf<UniCardProps>().toBeObject();
  expectTypeOf<UniCardProps>().toEqualTypeOf<UniHelper.UniCardProps>();

  expectTypeOf<UniCard>().not.toBeAny();
  expectTypeOf<UniCard>().toEqualTypeOf<UniHelper.UniCard>();

  expectTypeOf<UniCardInstance>().not.toBeAny();
  expectTypeOf<UniCardInstance>().toEqualTypeOf<UniHelper.UniCardInstance>();
});