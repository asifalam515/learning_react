
const Pointer = () => {
    return (
         <div
            style={{
                position: "relative",
                width: "100vw",
                height: "100vh",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    left: -10,
                    top: -10,
                    width: 20,
                    height: 20,
                    transform: ``,
                }}
            />
        </div>
    );
};

export default Pointer;