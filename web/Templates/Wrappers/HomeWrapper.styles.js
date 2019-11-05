import { fade } from "@material-ui/core/styles/colorManipulator";
const drawerWidth = 320;
export const styles = theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      padding: 0
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "9%"
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "8%"
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: "6%"
    },
    padding: "0 10% 10% 10%"
  },
  toolbar: {},
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    padding: "0 10%",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      padding: "0"
    }
  },
  menuButton: {
    marginLeft: 30,
    marginRight: 20
  },
  menuDropdown: {
    marginLeft: -12,
    marginRight: 20
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {},
  chartContainer: {
    marginLeft: -22
  },
  breadcrumbs: {
    padding: "10px",
    marginBottom: "1em"
  },
  tabs: {
    flexGrow: 1,
    paddingTop: 10
  },
  tableContainer: {
    height: 320
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 10,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(9),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(10),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    padding: `${20} ${theme.spacing(1)}`
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});
