function ImpliedReturn() {
    const multiply = (a, b) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    return (
        <>
            <h5>Implied Return</h5>
            fourTimesFive = {fourTimesFive}<br />
            multiply = {multiply(4, 5)}<br />
        </>
    )
};
export default ImpliedReturn;


