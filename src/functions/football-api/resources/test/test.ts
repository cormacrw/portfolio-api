import EndpointI from "../../../../lib/api/types/EndpointI";

const endpoint: EndpointI = {
    method: 'GET',
    route: '*/test',
    handler (req, res) {
        res.send({
            success: true,
            message: 'HELLO!'
        })
    },
}

export default endpoint