const audio = await Service.import("audio")

const icons = {
    101: "overamplified",
    67: "high",
    34: "medium",
    1: "low",
    0: "muted",
}

function getIcon() {
    const icon = audio.speaker.is_muted ? 0 : [101, 67, 34, 1, 0].find(
        threshold => threshold <= audio.speaker.volume * 100)

    return `audio-volume-${icons[icon]}-symbolic`
}

export function icon() { 
    return Widget.Icon({
        icon: Utils.watch(getIcon(), audio.speaker, getIcon),
    })
}

