

export default function InfoModal({isOpen, children}) {
    if(isOpen) {
        return (
            <>
            {children}
            </>
        )
    }
}