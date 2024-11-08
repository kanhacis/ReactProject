import mysql.connector
from mysql.connector import pooling

# MySQL connection pooling for performance
connection_pool = pooling.MySQLConnectionPool(
    pool_name="mypool",
    pool_size=10,
    pool_reset_session=True,
    host="localhost",
    database="FastAPI",
    user="root",
    password="root"
) 

# Dependency to get the connection for each request
def get_db():
    connection = connection_pool.get_connection()
    try:
        yield connection
    finally:
        connection.close()
