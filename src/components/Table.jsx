

const Table = ({ data }) => {
    return (
        <>
            {
                JSON.stringify(data) == '{}'
                    ? ''
                    : <table>
                        <tr>
                            <td>country</td>
                            <td>{data.sys.country}</td>
                        </tr>
                        <tr>
                            <td>city</td>
                            <td>{data.name}</td>
                            </tr>
                            <tr>
                            <td>temp</td>
                            <td>{(data.main?.temp - 273.15).toFixed(2)}</td>
                        </tr>

                        <tr>
                            <td>description</td>
                            <td>{data.weather[0].description}</td>
                        </tr>

                    </table>
            }
        </>
    );
}

export default Table;


