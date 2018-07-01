package com.teja.Hibdemo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
       ailen teja = new ailen();
       
       teja.setId(1);
       teja.setName("teja");
       teja.setColor("blue");
       
       Configuration con = new Configuration();
      
      SessionFactory sf = con.buildSessionFactory();
       Session session =sf.openSession();
       session.save(teja);
       
    }
}
