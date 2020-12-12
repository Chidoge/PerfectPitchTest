export const formatNote = (note: string) => {
    return note.replace("#","♯").replace("b","♭")
}

export const checkFilenameCondition = (note: string, fileNote: string) => {
    if (note.includes("/")) {
        note.replace("/","")
    }
    if (fileNote.includes("/")) {
        fileNote.replace("/","")
    }
    return (fileNote.startsWith(note) && note.includes('#') && fileNote.includes("#")) || (fileNote.startsWith(note) && !note.includes('#') && !fileNote.includes("#"))
}