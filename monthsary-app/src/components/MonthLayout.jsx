export default function MonthLayout({ month, overlay = false, children }) {
  const image = month.background && `url(${month.background})`;
  const style = {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...(image && {
      backgroundImage: overlay
        ? `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), ${image}`
        : image,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }),
  };
  return <div style={style}>{children}</div>;
}