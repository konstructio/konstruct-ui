type ContentModule =
  typeof import('../../components/VirtualizedTableContent/VirtualizedTableContent');

type Listener = () => void;

let contentRequest: Promise<ContentModule> | undefined;
let isContentLoaded = false;
const listeners = new Set<Listener>();

export const loadVirtualizedTableContent = (): Promise<ContentModule> => {
  if (!contentRequest) {
    contentRequest =
      import('../../components/VirtualizedTableContent/VirtualizedTableContent')
        .then((module) => {
          isContentLoaded = true;
          listeners.forEach((listener) => {
            listener();
          });

          return module;
        })
        .catch((error: unknown) => {
          contentRequest = undefined;

          throw error;
        });
  }

  return contentRequest;
};

export const isVirtualizedTableContentLoaded = (): boolean => {
  return isContentLoaded;
};

export const subscribeToVirtualizedTableContent = (
  listener: Listener,
): (() => void) => {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
};

export const preloadVirtualizedTable = (): Promise<void> => {
  return loadVirtualizedTableContent().then(() => undefined);
};
