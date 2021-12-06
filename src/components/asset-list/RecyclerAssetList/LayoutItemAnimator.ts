import { LayoutAnimation } from 'react-native';
import { BaseItemAnimator, RecyclerListView } from 'recyclerlistview';
import {
  RecyclerListViewProps,
  RecyclerListViewState,
} from 'recyclerlistview/dist/reactnative/core/RecyclerListView';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../RecyclerViewTypes' was resolved to '/Us... Remove this comment to see the full error message
import { ViewTypes } from '../RecyclerViewTypes';

// TODO: make reusable
type RecyclerListViewRef = RecyclerListView<
  RecyclerListViewProps,
  RecyclerListViewState
>;

const easingAnimation = {
  duration: 250,
  update: {
    delay: 10,
    type: 'easeInEaseOut',
  },
};

const springAnimation = {
  duration: 200,
  update: {
    initialVelocity: 0,
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'ios'.
    springDamping: ios ? 1 : 3,
    type: LayoutAnimation.Types.spring,
  },
};

export default class LayoutItemAnimator extends BaseItemAnimator {
  paddingBottom: number;
  globalDeviceDimensions: number;
  ref: RecyclerListViewRef | undefined;
  constructor(
    paddingBottom: number,
    globalDeviceDimensions: number,
    ref: RecyclerListViewRef | undefined
  ) {
    super();
    this.paddingBottom = ViewTypes.FOOTER.calculateHeight({
      paddingBottom: paddingBottom || 0,
    });
    this.globalDeviceDimensions = globalDeviceDimensions;
    this.ref = ref;
  }

  animateDidMount = () => undefined;
  animateShift = () => false;
  animateWillMount = () => undefined;
  animateWillUnmount = () => undefined;

  animateWillUpdate = () => {
    const hasScrollOffset = !!this.ref?.getCurrentScrollOffset;
    const hasContentDimension = !!this.ref?.getContentDimension;

    const shouldConfigureNext =
      hasScrollOffset &&
      hasContentDimension &&
      this.ref &&
      this.ref.getCurrentScrollOffset() > 0 &&
      this.ref.getContentDimension().height <
        this.ref.getCurrentScrollOffset() +
          this.globalDeviceDimensions +
          this.paddingBottom;

    if (shouldConfigureNext) {
      LayoutAnimation.configureNext(easingAnimation);
    } else {
      LayoutAnimation.configureNext(springAnimation);
    }
  };
}
