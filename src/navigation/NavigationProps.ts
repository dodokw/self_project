export type NavigationProps = {
  navigation: {
    navigate: (routeName: string, params?: any) => void;
    goBack: () => void;
    getParam: (param: string) => any;
    setParams: (params: any) => void;
    getParent(): {
      setOptions: ({
        tabBarStyle,
      }: {
        tabBarStyle: {display: 'none' | 'flex'};
      }) => void;
    };
    // addListener: (type: string, callback: () => void) => void;
    // removeListener: (type: string, callback: () => void) => void;
    // dispatch: (action: {type: string; params?: any}) => void;
    // dangerouslyGetParent: () => any;
    reset: (actions: any) => void;
  };
};
