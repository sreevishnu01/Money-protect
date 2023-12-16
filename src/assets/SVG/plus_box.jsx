const PlusBox = ({ fillColor = '#fff', style }) => {
    return (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
            <path d="M13.6641 1.07812C14.4609 1.875 14.5781 2.98438 14.5781 4.32031V10.3906C14.5781 11.7266 14.4609 12.8438 13.6641 13.6406C12.8672 14.4375 11.7422 14.5625 10.4062 14.5625H4.33594C3.00781 14.5625 1.88281 14.4375 1.08594 13.6406C0.289062 12.8438 0.171875 11.7266 0.171875 10.3906V4.30469C0.171875 2.99219 0.289062 1.875 1.08594 1.07812C1.88281 0.28125 3.00781 0.15625 4.32031 0.15625H10.4062C11.7422 0.15625 12.8672 0.28125 13.6641 1.07812ZM13.3203 4.10938C13.3203 3.30469 13.2188 2.46875 12.7422 2C12.2734 1.52344 11.4297 1.41406 10.625 1.41406H4.14844C3.32812 1.41406 2.47656 1.52344 2 1.99219C1.53125 2.46875 1.42969 3.30469 1.42969 4.13281V10.6094C1.42969 11.4141 1.53125 12.25 2 12.7188C2.47656 13.1953 3.32031 13.3047 4.125 13.3047H10.625C11.4297 13.3047 12.2734 13.1953 12.7422 12.7188C13.2188 12.25 13.3203 11.4141 13.3203 10.6094V4.10938ZM3.75781 7.35938C3.75781 6.96875 4.02344 6.69531 4.42969 6.69531H6.72656V4.39844C6.72656 4 6.98438 3.72656 7.36719 3.72656C7.75781 3.72656 8.03125 4 8.03125 4.39844V6.69531H10.3359C10.7266 6.69531 11 6.96875 11 7.35938C11 7.74219 10.7266 8 10.3359 8H8.03125V10.3047C8.03125 10.7031 7.75781 10.9688 7.36719 10.9688C6.98438 10.9688 6.72656 10.6953 6.72656 10.3047V8H4.42969C4.03125 8 3.75781 7.74219 3.75781 7.35938Z" fill={fillColor} />
        </svg>

    )
}

export default PlusBox
