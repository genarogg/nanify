
import type { RouteGroup } from "./types"
import ModalPage from "../docs/ux/modal/page"
import SelectPage from "../docs/ux/select/page"
import TabsPage from "../docs/ux/tabs/page"
import BtnPage from "../docs/ux/btns/page"
import BadgePage from "../docs/ux/badge/page"
import InputPage from "../docs/ux/input/page"
import TextareaPage from "../docs/ux/textarea/page"
import SpinnerPage from "../docs/ux/spinner/page"
import InputListPage from "../docs/ux/input-list/page"
import InputFilePage from "../docs/ux/input-file/page"
import IconPage from "../docs/ux/icon/page"

export const UxRoutes: RouteGroup = {
  prefix: "/ux",
  routes: [
    {
      path: "/modal",
      component: ModalPage,
      key: "modal",
    },
    {
      path: "/select",
      component: SelectPage,
      key: "select",
    },
    {
      path: "/tabs",
      component: TabsPage,
      key: "tabs",
    },
    {
      path: "/btns",
      component: BtnPage,
      key: "ux-btns",
    },
    {
      path: "/badge",
      component: BadgePage,
      key: "badge",
    },
    {
      path: "/input",
      component: InputPage,
      key: "input",
    },
    {
      path: "/textarea",
      component: TextareaPage,
      key: "textarea",
    },
    {
      path: "/spinner",
      component: SpinnerPage,
      key: "spinner",
    },
    {
      path: "/input-list",
      component: InputListPage,
      key: "input-list",
    },
    // {
    //   path: "/input-file",
    //   component: InputFilePage,
    //   key: "input-file",
    // },
    // {
    //   path: "/icon",
    //   component: IconPage,
    //   key: "icon",
    // },
  ],
}
