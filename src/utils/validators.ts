export const BYTES_IN_MEGAMYTES = 1000000;

export const stringAndNumber = (value: string) => {
  return value && !/^[a-zA-Z0-9]+$/.test(value)
    ? "This field should be string and number"
    : undefined;
};

export const fileSizeLimitFormat = (limit: number) => (file: any) => {
  return file && file.size > limit
    ? `File size should be less than ${limit / BYTES_IN_MEGAMYTES} mb`
    : undefined;
};

export const fileImageFormat = (file: any) => {
  return file && !/\/(jpg|svg|jpeg|png)$/.test(file.type)
    ? `File should be image`
    : undefined;
};

export const urlFormatImage = (value: string) => {
  return value && !/\.(jpg|svg|jpeg|png)$/.test(value)
    ? `Url should be image`
    : undefined;
};

export const emailFormat = (value: string) => {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? `Invalid email address`
    : undefined;
};

export const isOver18 = (dateOfBirth: Date) => {
  const date18YrsAgo = new Date();
  date18YrsAgo.setFullYear(date18YrsAgo.getFullYear() - 18);
  // check if the date of birth is before that date
  return dateOfBirth <= date18YrsAgo;
};

export const numberFormat = (value: number) =>
  isNaN(value) ? "Must be a number" : undefined;

export const minValue = (min: number) => (value: number) =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;

export const passwordFormat = (value: string) => {
  return value &&
    !/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i.test(
      value
    )
    ? `Invalid email address`
    : undefined;
};
