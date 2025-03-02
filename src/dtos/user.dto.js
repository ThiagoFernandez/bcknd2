class UserDTO {
  
  // Constructor que recibe un usuario y lo transforma en un DTO
  constructor(user) {
    // Asignacion de las propiedades del usuario
    this.firstName = user.first_name;
    this.lastName = user.last_name;
    this.email = user.email;
    this.age = user.age;
    this.role = user.role;
  }
}
// Export
export default UserDTO;
