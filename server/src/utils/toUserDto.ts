import { UserDto } from 'src/users/dto/userDto.dto';
import { UserDocument } from './../users/schemas/user.schema';
export const toUserDto = (data: UserDocument): UserDto => {
  const { _id, email } = data;
  let userDto: UserDto = { _id, email };
  return userDto;
};
