using System;
using System.Data;
using System.Data.SqlClient;
using System.Web.Caching;

namespace api.Models
{
    public class dal
    {

        public DateTime lastQueryTime;
        public String lastQuerySQL;

        public SqlConnection myConnection = new SqlConnection("SQL BAĞLANTINIZI BURAYA YERLEŞTİRİN ");

        Cache cache = new Cache();


        public DataSet CommandExecuteReader(String sql, SqlConnection conn) // parametresiz sql kullanımı
        {

            lastQueryTime = DateTime.Now;
            lastQuerySQL = sql;
            //frmMain.myTools.lastDBerror = "";
            DataSet ds = new DataSet();
            privateOpen(conn);
            try
            {
                SqlCommand myCommand = new SqlCommand(sql, conn);
                myCommand.CommandTimeout = 600;

                SqlDataAdapter dataAdapter = new SqlDataAdapter(myCommand);

                dataAdapter.Fill(ds);
            }
            catch (Exception exp)
            {
                Console.WriteLine(exp.Message);
                //frmMain.myTools.lastDBerror = exp.Message;
            }
            finally
            {
                privateClose(conn);
            }

            return ds;
        }

        public DataSet CommandCacheExecuteReader(String sql, SqlConnection conn, String key, int minute) // parametresiz sql kullanımı
        {

            lastQueryTime = DateTime.Now;
            lastQuerySQL = sql;

            DataSet ds = new DataSet();
            privateOpen(conn);
            try
            {

                if (cache[key] != null)
                {
                    ds = cache[key] as DataSet;
                }
                else
                {
                    SqlCommand myCommand = new SqlCommand(sql, conn);
                    myCommand.CommandTimeout = 600;

                    SqlDataAdapter dataAdapter = new SqlDataAdapter(myCommand);

                    dataAdapter.Fill(ds);

                    cache.Insert(key, ds, null, DateTime.Now.AddMinutes(minute), System.Web.Caching.Cache.NoSlidingExpiration);
                }
            }
            catch (Exception exp)
            {
                Console.WriteLine(exp.Message);
                //frmMain.myTools.lastDBerror = exp.Message;
            }
            finally
            {
                privateClose(conn);
            }

            return ds;
        }


        public DataSet CommandCacheExecuteReaderSecond(String sql, SqlConnection conn, String key, int second) // parametresiz sql kullanımı
        {

            lastQueryTime = DateTime.Now;
            lastQuerySQL = sql;

            DataSet ds = new DataSet();
            privateOpen(conn);
            try
            {

                if (cache[key] != null)
                {
                    ds = cache[key] as DataSet;
                }
                else
                {
                    SqlCommand myCommand = new SqlCommand(sql, conn);
                    myCommand.CommandTimeout = 600;

                    SqlDataAdapter dataAdapter = new SqlDataAdapter(myCommand);

                    dataAdapter.Fill(ds);

                    cache.Insert(key, ds, null, DateTime.Now.AddSeconds(second), System.Web.Caching.Cache.NoSlidingExpiration);
                }
            }
            catch (Exception exp)
            {
                Console.WriteLine(exp.Message);
                //frmMain.myTools.lastDBerror = exp.Message;
            }
            finally
            {
                privateClose(conn);
            }

            return ds;
        }


        public SqlDataReader CommandExecuteSQLReader(String sql, SqlConnection conn) // parametresiz sql kullanımı
        {

            lastQueryTime = DateTime.Now;
            lastQuerySQL = sql;
            SqlDataReader r;
            privateOpen(conn);
            try
            {
                SqlCommand myCommand = new SqlCommand(sql, conn);
                myCommand.CommandTimeout = 600;

                r = myCommand.ExecuteReader();
                return r;

            }
            catch (Exception exp)
            {
                Console.WriteLine(exp.Message);
                //frmMain.myTools.lastDBerror = exp.Message;
            }
            finally
            {
            }


            return null;
        }


        public string CommandExecuteSQLScalar(String sql, SqlConnection conn) // parametresiz sql kullanımı
        {

            lastQueryTime = DateTime.Now;
            lastQuerySQL = sql;
            string r;
            privateOpen(conn);
            try
            {
                SqlCommand myCommand = new SqlCommand(sql, conn);
                myCommand.CommandTimeout = 600;

                r = myCommand.ExecuteScalar().ToString();
                return r;

            }
            catch (Exception exp)
            {
                Console.WriteLine(exp.Message);
                //frmMain.myTools.lastDBerror = exp.Message;
            }
            finally
            {
                privateClose(conn);
            }


            return null;
        }

        public void CommandExecuteNonQuery(String sql, SqlConnection conn)
        {
            lastQueryTime = DateTime.Now;
            lastQuerySQL = sql;
            // frmMain.myTools.lastDBerror = "";
            //Tracer.WriteLine("Dal.CommandExecuteNonQuery", strCommand, new System.Diagnostics.StackTrace());
            privateOpen(conn);
            try
            {
                SqlCommand myCommand = new SqlCommand(sql, conn);
                myCommand.CommandTimeout = 600;
                myCommand.ExecuteNonQuery();
            }
            catch (Exception exp)
            {
                Console.WriteLine(exp.Message);
                //frmMain.myTools.lastDBerror = exp.Message;

                try
                {
                    string sqllog = $"insert into ms_sql_log(log_text) values('{exp.Message}') ";
                    SqlCommand myCommand = new SqlCommand(sqllog, conn);
                    myCommand.CommandTimeout = 600;
                    myCommand.ExecuteNonQuery();
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }

            }
            finally
            {
                privateClose(conn);
            }
        }

        public bool BoolCommandExecuteNonQuery(String sql, SqlConnection conn)
        {
            lastQueryTime = DateTime.Now;
            lastQuerySQL = sql;
            // frmMain.myTools.lastDBerror = "";
            //Tracer.WriteLine("Dal.CommandExecuteNonQuery", strCommand, new System.Diagnostics.StackTrace());
            privateOpen(conn);
            try
            {


                SqlCommand myCommand = new SqlCommand(sql, conn);
                myCommand.CommandTimeout = 600;
                myCommand.ExecuteNonQuery();

                return true;
            }
            catch (Exception exp)
            {
                Console.WriteLine(exp.Message);
                //frmMain.myTools.lastDBerror = exp.Message;


                return false;
            }
            finally
            {
                privateClose(conn);
            }
        }


        private void privateOpen(SqlConnection connection)
        {
            try
            {
                ConControl(connection);
            }
            catch (Exception)
            {
            }
        }
        private void privateClose(SqlConnection connection)
        {
            try
            {
                connection.Close();
            }
            catch (Exception)
            {
            }
        }


        public void OpenSQLConnection(String ConnectionString, SqlConnection conn)
        {
            myConnection = new SqlConnection(ConnectionString);

            ConControl(myConnection);

        }

        public void ConControl(SqlConnection c)
        {
            if (c.State != ConnectionState.Open)
            {
                c.Open();
            }
        }

        public void closeConnection()
        {
            myConnection.Close();
        }

        ~dal()
        {
            privateClose(myConnection);
            try
            {
                myConnection.Dispose();
            }
            catch (Exception)
            {
            }
        }
    }
}