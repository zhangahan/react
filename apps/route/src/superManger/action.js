/**
 * Created by Administrator on 2017/3/28 0028.
 */
export function leftLinkRight(json) {
    return {
        type:"left_link_right",
        json
    }
}
export function headerLink(json) {
    return {
        type:"header_link",
        json
    }
}
export function leftLinkBottom(json) {
    return {
        type:"left_link_bottom",
        json
    }
}
export function maskControl(json) {
    return {
        type:"mask_control",
        json
    }
}
export function changeData(json) {
    return {
        type:"change_data",
        json
    }
}


