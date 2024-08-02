


export const parseVideoDuration = (duration) => {
    // console.log(duration)
    const durationParts = duration
        .replace("PT", "")
        .replace("H", ":")
        .replace("M", ":")
        .replace("S", "")
        .split(":");
    
    // console.log(durationParts)

    if (durationParts === 3) {
        return `${durationParts[0]}:${
          parseInt(durationParts[1]) < 10
            ? `0${durationParts[1]}`
            : durationParts[1]
        }:${
          parseInt(durationParts[2]) < 10
            ? `0${durationParts[2]}`
            : durationParts[2]
        }`;
    }
    
      if (durationParts === 2) {
          return `${durationParts[0]}:${parseInt(durationParts[1]) < 10
                  ? `0${durationParts[1]}`
                  : durationParts[1]
              }`;
    }
    if (durationParts === 2) {
      return `0:${
        parseInt(durationParts[0]) < 10
          ? `0${durationParts[0]}`
          : durationParts[0]
      }`;
    }

  return ""
}

