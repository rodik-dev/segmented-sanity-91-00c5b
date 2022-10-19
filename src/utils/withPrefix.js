const _ = require('lodash');

export default function withPrefix(url) {
    return '/' + _.trimStart(url, '/');
}
