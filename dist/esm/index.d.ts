interface AvatarVersion {
  part?:
    | "00"
    | "01"
    | "02"
    | "03"
    | "04"
    | "05"
    | "06"
    | "07"
    | "08"
    | "09"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15";
  theme?: "A" | "B" | "C";
}

interface AvatarFilters {
  gender?: "male" | "female" | "any";
  skinTone?: "light" | "medium" | "dark" | "any";
}

/**
 *
 * @param string The text string that will be converted into the avatar.
 * @param sansEnv If this is true, the script returns the final avatar without the circle background (environment part)
 * @param ver An optional object to force a specific initial version
 * @param options Optional filters for generated avatars
 */
declare function multiavatar(
  string: string,
  sansEnv?: boolean,
  ver?: AvatarVersion | AvatarFilters,
  options?: AvatarFilters
): string;

export default multiavatar;
