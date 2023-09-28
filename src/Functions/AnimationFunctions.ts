import { ViewsEnum } from "../Types/Views.enum";

export const blurView = (view: ViewsEnum) => {
  switch (view) {
    case ViewsEnum.RegisterView: {
      const registerDocument = document.getElementById(
        "register-main-container"
      );
      if (registerDocument !== null) {
        registerDocument.style.filter = "blur(4px)";
      }
      break;
    }
    default: {
      return;
    }
  }
};

export const removeBlurView = (view: ViewsEnum) => {
  switch (view) {
    case ViewsEnum.RegisterView: {
      const registerDocument = document.getElementById(
        "register-main-container"
      );
      if (registerDocument !== null) {
        registerDocument.style.filter = "none";
      }
      break;
    }
    default: {
      return;
    }
  }
};
