/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uxt9vFaCd33rdvxeE5TgZm
// Component: oxSvomIh7nrf

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Ratings from "../../Ratings"; // plasmic-import: -oAWrAr6TcnI/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: uxt9vFaCd33rdvxeE5TgZm/projectcss
import sty from "./PlasmicProductCard.module.css"; // plasmic-import: oxSvomIh7nrf/css

import ShoppingCartIcon from "./icons/PlasmicIcon__ShoppingCart"; // plasmic-import: IbieH7OYyWUh/icon
import HeartOIcon from "./icons/PlasmicIcon__HeartO"; // plasmic-import: xDeNBqQ2bj5P/icon
import ExpandIcon from "./icons/PlasmicIcon__Expand"; // plasmic-import: D2eBTwoO0VZL/icon

createPlasmicElementProxy;

export type PlasmicProductCard__VariantMembers = {
  withReviews: "withReviews";
  onSale: "onSale";
};
export type PlasmicProductCard__VariantsArgs = {
  withReviews?: SingleBooleanChoiceArg<"withReviews">;
  onSale?: SingleBooleanChoiceArg<"onSale">;
};
type VariantPropType = keyof PlasmicProductCard__VariantsArgs;
export const PlasmicProductCard__VariantProps = new Array<VariantPropType>(
  "withReviews",
  "onSale"
);

export type PlasmicProductCard__ArgsType = {
  title?: React.ReactNode;
  price?: React.ReactNode;
  image?: React.ReactNode;
  ratings?: React.ReactNode;
};
type ArgPropType = keyof PlasmicProductCard__ArgsType;
export const PlasmicProductCard__ArgProps = new Array<ArgPropType>(
  "title",
  "price",
  "image",
  "ratings"
);

export type PlasmicProductCard__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultProductCardProps {
  title?: React.ReactNode;
  price?: React.ReactNode;
  image?: React.ReactNode;
  ratings?: React.ReactNode;
  withReviews?: SingleBooleanChoiceArg<"withReviews">;
  onSale?: SingleBooleanChoiceArg<"onSale">;
  className?: string;
}

const $$ = {};

function PlasmicProductCard__RenderFunc(props: {
  variants: PlasmicProductCard__VariantsArgs;
  args: PlasmicProductCard__ArgsType;
  overrides: PlasmicProductCard__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "withReviews",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.withReviews
      },
      {
        path: "onSale",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.onSale
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootonSale]: hasVariant($state, "onSale", "onSale"),
          [sty.rootwithReviews]: hasVariant(
            $state,
            "withReviews",
            "withReviews"
          )
        }
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <div className={classNames(projectcss.all, sty.freeBox__aVt)}>
        {renderPlasmicSlot({
          defaultContents: (
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img___68PGt)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              src={{
                src: "data:image/jpeg;base64,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",
                fullWidth: 270,
                fullHeight: 310
              }}
            />
          ),

          value: args.image
        })}
        <div
          className={classNames(projectcss.all, sty.freeBox__uPuns, {
            [sty.freeBoxonSale__uPuns5QeD]: hasVariant(
              $state,
              "onSale",
              "onSale"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__wwxK
            )}
          >
            {"Sale"}
          </div>
        </div>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__rVnPs)}
        >
          <ShoppingCartIcon
            className={classNames(projectcss.all, sty.svg__oazro)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___0CPru
            )}
          >
            {"Add to cart"}
          </div>
          <HeartOIcon
            className={classNames(projectcss.all, sty.svg__h8Qjq)}
            role={"img"}
          />

          <ExpandIcon
            className={classNames(projectcss.all, sty.svg__iPnd)}
            role={"img"}
          />
        </Stack__>
      </div>
      {renderPlasmicSlot({
        defaultContents: (
          <Ratings
            className={classNames("__wab_instance", sty.ratings__px6PY)}
          />
        ),

        value: args.ratings
      })}
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__dWNh)}
      >
        {renderPlasmicSlot({
          defaultContents: "Title",
          value: args.title,
          className: classNames(sty.slotTargetTitle)
        })}
        {renderPlasmicSlot({
          defaultContents: "$100",
          value: args.price,
          className: classNames(sty.slotTargetPrice)
        })}
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProductCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProductCard__VariantsArgs;
    args?: PlasmicProductCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProductCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicProductCard__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicProductCard__ArgProps,
          internalVariantPropNames: PlasmicProductCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProductCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCard";
  } else {
    func.displayName = `PlasmicProductCard.${nodeName}`;
  }
  return func;
}

export const PlasmicProductCard = Object.assign(
  // Top-level PlasmicProductCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicProductCard
    internalVariantProps: PlasmicProductCard__VariantProps,
    internalArgProps: PlasmicProductCard__ArgProps
  }
);

export default PlasmicProductCard;
/* prettier-ignore-end */
