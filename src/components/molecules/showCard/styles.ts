export default {
  container: {
    maxWidth: "50%",
    width: 300,
    boxShadow: "0 3px 20px rgb(0 0 0 / 10%)",
    borderRadius: "0 0 5px 5px",
  },
  availableChip: {
    position: "absolute",
    zIndex: 4,
    margin: "10px",
  },
  imageContent: {
    height: 220,
    backgroundImage: "url(https://picsum.photos/200)",
    backgroundSize: "100% 100%",
  },
  titleContent: {
    height: 40,
  },
  title: {
    color: "secondary.main",
    fontSize: 18,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    fontWeight: "bold",
  },
  bottomContent: {
    marginTop: "12px",
    marginBottom: "12px",
  },
  buyButton: {
    fontWeight: 600,
    color: "common.white",
    textTransform: "none",
  },
  placeLabel: {
    color: "secondary.main",
    fontSize: 17,
  },
};
