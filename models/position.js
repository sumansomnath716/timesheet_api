class Position {

                    constructor(
                                        id,
                                        pos_name,
                                        pos_dtls,
                                        created_by,
                                        created_at,
                                        updated_by,
                                        updated_at,
                    ) {
                                        this.id = id;
                                        this.pos_name = pos_name;
                                        this.pos_dtls = pos_dtls;
                                        this.created_by = created_by;
                                        this.created_at = created_at;
                                        this.updated_by = updated_by;
                                        this.updated_at = updated_at;
                    }

}

module.exports = Position;