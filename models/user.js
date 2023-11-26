class User {
                    constructor(
                                        cover_pic,
                                        created_at,
                                        created_by,
                                        dob,
                                        email,
                                        id,
                                        isOnline,
                                        name,
                                        password,
                                        updated_at,
                                        updated_by
                    ) {
                                        this.cover_pic = cover_pic
                                        this.created_at = created_at
                                        this.created_by = created_by
                                        this.dob = dob
                                        this.email = email
                                        this.id = id
                                        this.isOnline = isOnline
                                        this.name = name
                                        this.password = password
                                        this.updated_at = updated_at
                                        this.updated_by = updated_by
                    }

}

module.exports = User;