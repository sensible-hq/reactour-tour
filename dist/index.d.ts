import * as React$1 from 'react';
import React__default, { Dispatch, ReactNode, ComponentType, ReactElement, MouseEventHandler } from 'react';
import { PopoverStylesObj, PositionProps, Position } from '@reactour/popover';
export { Position } from '@reactour/popover';
import { MaskStylesObj } from '@reactour/mask';
import { RectResult } from '@reactour/utils';

type StylesKeys = 'badge' | 'controls' | 'navigation' | 'button' | 'arrow' | 'dot' | 'close' | 'svg';
type StylesObj = {
    [key in StylesKeys]?: StyleFn;
};
type StyleFn = (props: {
    [key: string]: any;
}, state?: {
    [key: string]: any;
}) => React.CSSProperties;

type BadgeProps$1 = {
    styles?: StylesObj;
};

type CloseProps = {
    styles?: StylesObj;
    onClick?: () => void;
    disabled?: boolean;
};

type ContentProps = {
    content: any;
    setCurrentStep: Dispatch<React__default.SetStateAction<number>>;
    setIsOpen?: Dispatch<React__default.SetStateAction<Boolean>>;
    currentStep: number;
    transition?: boolean;
    isHighlightingObserved?: boolean;
};

type BaseProps = {
    styles?: StylesObj;
};
type NavigationProps = BaseProps & {
    setCurrentStep: Dispatch<React__default.SetStateAction<number>>;
    steps: StepType[];
    currentStep: number;
    disableDots?: boolean;
    nextButton?: (props: BtnFnProps) => ReactNode | null;
    prevButton?: (props: BtnFnProps) => ReactNode | null;
    setIsOpen: Dispatch<React__default.SetStateAction<Boolean>>;
    hideButtons?: boolean;
    hideDots?: boolean;
    disableAll?: boolean;
    rtl?: boolean;
    Arrow?: ComponentType<ArrowProps>;
};

type ArrowProps = BaseProps & {
    inverted?: Boolean;
    disabled?: Boolean;
};

interface PopoverComponents {
    Badge: ComponentType<BadgeProps$1>;
    Close: ComponentType<CloseProps>;
    Content: ComponentType<ContentProps>;
    Navigation: ComponentType<NavigationProps>;
    Arrow: ComponentType<ArrowProps>;
}
type PopoverComponentsType = Partial<PopoverComponents>;
declare const components: {
    Badge: React$1.FC<React$1.PropsWithChildren<BadgeProps$1>>;
    Close: React$1.FC<CloseProps>;
    Content: React$1.FC<ContentProps>;
    Navigation: React$1.FC<NavigationProps>;
    Arrow: React$1.FC<ArrowProps>;
};

type SharedProps = KeyboardHandler & {
    steps: StepType[];
    styles?: StylesObj & PopoverStylesObj & MaskStylesObj;
    padding?: Padding;
    position?: Position;
    disableInteraction?: boolean;
    disableFocusLock?: boolean;
    disableDotsNavigation?: boolean;
    disableKeyboardNavigation?: boolean | KeyboardParts[];
    className?: string;
    maskClassName?: string;
    highlightedMaskClassName?: string;
    maskId?: string;
    clipId?: string;
    nextButton?: (props: BtnFnProps) => ReactNode | null;
    prevButton?: (props: BtnFnProps) => ReactNode | null;
    afterOpen?: (target: Element | null) => void;
    beforeClose?: (target: Element | null) => void;
    onClickMask?: (clickProps: ClickProps) => void;
    onClickClose?: (clickProps: ClickProps) => void;
    onClickHighlighted?: MouseEventHandler<SVGRectElement>;
    badgeContent?: (badgeProps: BadgeProps) => any;
    showNavigation?: boolean;
    showPrevNextButtons?: boolean;
    showCloseButton?: boolean;
    showBadge?: boolean;
    showDots?: boolean;
    scrollSmooth?: boolean;
    inViewThreshold?: number | {
        x?: number;
        y?: number;
    };
    accessibilityOptions?: A11yOptions;
    rtl?: boolean;
    components?: PopoverComponentsType;
    ContentComponent?: ComponentType<PopoverContentProps>;
    Wrapper?: ComponentType;
};
type PopoverContentProps = {
    styles?: StylesObj & PopoverStylesObj & MaskStylesObj;
    badgeContent?: (badgeProps: BadgeProps) => any;
    components?: PopoverComponentsType;
    accessibilityOptions?: A11yOptions;
    disabledActions?: boolean;
    onClickClose?: (clickProps: ClickProps) => void;
    setCurrentStep: Dispatch<React.SetStateAction<number>>;
    currentStep: number;
    transition?: boolean;
    isHighlightingObserved?: boolean;
    setIsOpen: Dispatch<React.SetStateAction<Boolean>>;
    steps: StepType[];
    setSteps?: Dispatch<React.SetStateAction<StepType[]>>;
    showNavigation?: boolean;
    showPrevNextButtons?: boolean;
    showCloseButton?: boolean;
    showBadge?: boolean;
    showDots?: boolean;
    nextButton?: (props: BtnFnProps) => ReactNode | null;
    prevButton?: (props: BtnFnProps) => ReactNode | null;
    disableDotsNavigation?: boolean;
    rtl?: boolean;
    meta?: string;
    setMeta?: Dispatch<React.SetStateAction<string>>;
};
type A11yOptions = {
    ariaLabelledBy?: string;
    closeButtonAriaLabel: string;
    showNavigationScreenReaders: boolean;
};
type ComponentPadding = number | [number, number];
type Padding = number | {
    mask?: ComponentPadding;
    popover?: ComponentPadding;
    wrapper?: ComponentPadding;
};
type KeyboardParts = 'esc' | 'left' | 'right';
type ClickProps = {
    setIsOpen: Dispatch<React.SetStateAction<Boolean>>;
    setCurrentStep: Dispatch<React.SetStateAction<number>>;
    currentStep: number;
    steps?: StepType[];
    setSteps?: Dispatch<React.SetStateAction<StepType[]>>;
    meta?: string;
    setMeta?: Dispatch<React.SetStateAction<string>>;
};
type KeyboardHandler = {
    keyboardHandler?: (e: KeyboardEvent, clickProps?: ClickProps, status?: {
        isEscDisabled?: boolean;
        isRightDisabled?: boolean;
        isLeftDisabled?: boolean;
    }) => void;
};
type TourProps = SharedProps & ClickProps & {
    isOpen: Boolean;
    disabledActions: boolean;
    setDisabledActions: Dispatch<React.SetStateAction<boolean>>;
    onTransition?: (postionsProps: PositionProps, prev: RectResult) => 'top' | 'right' | 'bottom' | 'left' | 'center' | [number, number];
};
type BadgeProps = {
    totalSteps: number;
    currentStep: number;
    transition?: boolean;
};
type ProviderProps = SharedProps & {
    children: React.ReactNode;
    defaultOpen?: Boolean;
    startAt?: number;
    setCurrentStep?: Dispatch<React.SetStateAction<number>>;
    currentStep?: number;
    meta?: string;
    setMeta?: Dispatch<React.SetStateAction<string>>;
};
type StepType = {
    selector: string | Element;
    content: ReactElement | string | ((props: PopoverContentProps) => void);
    position?: Position;
    highlightedSelectors?: string[];
    mutationObservables?: string[];
    resizeObservables?: string[];
    navDotAriaLabel?: string;
    stepInteraction?: boolean;
    action?: (elem: Element | null) => void;
    actionAfter?: (elem: Element | null) => void;
    disableActions?: boolean;
    padding?: Padding;
    bypassElem?: boolean;
    styles?: StylesObj & PopoverStylesObj & MaskStylesObj;
};
type BtnFnProps = {
    Button: React.FC<React.PropsWithChildren<NavButtonProps>>;
    setCurrentStep: Dispatch<React.SetStateAction<number>>;
    stepsLength: number;
    currentStep: number;
    setIsOpen: Dispatch<React.SetStateAction<Boolean>>;
    steps?: StepType[];
};
type NavButtonProps = {
    onClick?: () => void;
    kind?: 'next' | 'prev';
    hideArrow?: boolean;
};

declare const Tour: React__default.FC<TourProps>;

declare const TourContext: React__default.Context<TourProps>;
declare const TourProvider: React__default.FC<ProviderProps>;

declare function useTour(): TourProps;

declare function withTour<P>(WrappedComponent: React__default.ComponentType<P>): (props: P) => JSX.Element;

export { KeyboardParts, PopoverContentProps, ProviderProps, StepType, StylesObj, Tour, TourContext, TourProps, TourProvider, components, Tour as default, useTour, withTour };
