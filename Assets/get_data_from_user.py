

def get_user_data():
    to_continue = True
    user_data = []
    while to_continue != "n":
        clock_in = input("Clocked in at: ")
        clock_out = input("Clocked out at: ")
        user_data.append(
            {
                "clocked_in": clock_in,
                "clocked_out": clock_out
            }
        )
        to_continue = input("Continue? y/n: ")
    return user_data
