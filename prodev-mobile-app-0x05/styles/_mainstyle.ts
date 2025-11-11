import { StyleSheet, Dimensions } from "react-native";

// Constants for reusable values
const COLORS = {
  white: "#fff",
};

const SPACING = {
  small: 10,
  medium: 20,
  large: 40,
};

const FONT_SIZE = {
  small: 18,
  medium: 24,
  large: 40,
};

const BORDER_RADIUS = {
  large: 36,
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  /* Home screen specific styles used by app/(home)/index.tsx */
  searchGroup: {
    paddingHorizontal: SPACING.medium,
    paddingVertical: SPACING.small,
    backgroundColor: "transparent",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SPACING.small,
    paddingVertical: SPACING.small,
    justifyContent: "space-between",
  },
  searchControlGroup: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.large,
    paddingHorizontal: SPACING.medium,
    paddingVertical: SPACING.small,
    marginRight: SPACING.small,
  },
  searchFormText: {
    fontSize: FONT_SIZE.small,
    color: "#333",
    fontWeight: "400",
  },
  searchControl: {
    flex: 1,
    padding: 0,
    marginLeft: SPACING.small / 2,
  },
  searchButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#28C08D",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImageContainer: {
    flex: 1,
    height: height,
  },
  logoContainer: {
    padding: SPACING.large,
    alignItems: "center",
    marginTop: 74,
  },
  titleContainer: {
    marginTop: SPACING.large,
  },
  titleText: {
    fontSize: FONT_SIZE.large,
    textAlign: "center",
    fontWeight: 800,
    color: COLORS.white,
  },
  titleSubTextContainer: {
    marginTop: SPACING.medium,
  },
  titleSubText: {
    fontWeight: 300,
    fontSize: FONT_SIZE.small,
    textAlign: "center",
    color: COLORS.white,
  },
  buttonPrimary: {
    backgroundColor: COLORS.white,
    alignItems: "center",
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.large,
    flex: 1,
  },
  buttonPrimaryText: {
    fontSize: FONT_SIZE.small,
    fontWeight: 300,
    textAlign: "center",
  },
  buttonSecondary: {
    alignItems: "center",
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.large,
    borderWidth: 1,
    borderColor: COLORS.white,
    flex: 1,
  },
  buttonSecondaryText: {
    fontSize: FONT_SIZE.small,
    fontWeight: 300,
    textAlign: "center",
    color: COLORS.white,
  },
  buttonGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.medium,
    paddingHorizontal: SPACING.medium,
  },
  buttonGroupSubText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: SPACING.small,
    marginTop: 19,
  },
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SPACING.medium,
    paddingVertical: SPACING.small,
  },
  filterContainer: {
    width: 72,
    alignItems: "center",
    justifyContent: "center",
    marginRight: SPACING.small,
    padding: SPACING.small / 2,
    backgroundColor: COLORS.white,
    borderRadius: 12,
  },
  listingContainer: {
    paddingHorizontal: SPACING.medium,
    marginTop: SPACING.small,
  },
  paginationContainer: {
    alignItems: "center",
    paddingVertical: SPACING.large,
  },
  showMoreButton: {
    backgroundColor: "#111",
    paddingHorizontal: SPACING.large,
    paddingVertical: SPACING.small,
    borderRadius: BORDER_RADIUS.large,
    alignItems: "center",
    justifyContent: "center",
  },
  showMoreButtonText: {
    color: COLORS.white,
    fontSize: FONT_SIZE.small,
    textAlign: "center",
  },
});

export { styles };
