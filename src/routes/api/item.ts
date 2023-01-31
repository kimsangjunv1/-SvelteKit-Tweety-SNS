let item = 'banana'

export function get() {
    return {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: { item }
    }
}