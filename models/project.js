class Position {

          constructor(
                              id,
                              proj_name,
                              proj_dtls,
                              proj_url,
                              status,
                              created_by,
                              created_at,
                              updated_by,
                              updated_at,
          ) {
                              this.id = id;
                              this.proj_name = proj_name;
                              this.proj_dtls = proj_dtls;
                              this.proj_url = proj_url;
                              this.status = status;
                              this.created_by = created_by;
                              this.created_at = created_at;
                              this.updated_by = updated_by;
                              this.updated_at = updated_at;
          }

}

module.exports = Position;