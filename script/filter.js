// taken from my own project : https://github.com/raphael-haziza/github-profile-analyzer
export function pickProperties(json, properties) {
    let result;

    if (Array.isArray(json)) {
        result = [];

        for (const item of json) {
            const temp = {};

            for (const property of properties) {
                if (property in item) {
                    temp[property] = item[property];
                }
            }

            result.push(temp);
        }
    } else {
        result = {};

        for (const property of properties) {
            if (property in json) {
                result[property] = json[property];
            }
        }
    }

    return result;
}