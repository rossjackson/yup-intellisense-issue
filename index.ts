import { object, string, number, date, InferType} from 'yup'

let userSchema = object({
    name: string().required(),
    age: number().required().positive().integer(),
    email: string().email(),
    website: string().url().nullable(),
    createdOn: date().default(() => new Date()),
  });


type User = InferType<typeof userSchema>;

/**
 * Control+Space (Mac) to see the intellisense here
 */
const testUser: User = {

}