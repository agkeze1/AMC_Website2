export const TitleSm = ({ title }) => {
  return (
    <>
      <div>
        <h4 style={{ fontWeight: "bold" }}>{title}</h4>
        <hr
          style={{
            width: "30px",
            height: "5px",
            backgroundColor: "#ffba00",
            float: "left",
          }}
        />
      </div>
    </>
  );
};
