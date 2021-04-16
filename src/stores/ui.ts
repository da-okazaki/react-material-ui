import { decorate, observable, action } from "mobx";

class UiStore {
  error: Error | null;
  isSettingsOpen: boolean;
  isChatOpen: boolean;
  isReactionOpen: boolean;
  isStatsOpen: boolean;
  isReEntering: boolean;
  isGrid: boolean;
  mode: string;

  constructor() {
    this.error = null;
    this.isSettingsOpen = false;
    this.isChatOpen = false;
    this.isReactionOpen = false;
    this.isStatsOpen = false;
    this.isReEntering = false;
    this.isGrid = false;
    this.mode = "dual";
  }

  showError(err: Error): Error {
    this.error = err;
    return err;
  }
}
decorate(UiStore, {
  error: observable.ref,
  isSettingsOpen: observable,
  isChatOpen: observable,
  isReactionOpen: observable,
  isStatsOpen: observable,
  isReEntering: observable,
  isGrid: observable,
  mode: observable,
  showError: action
});

export default UiStore;
