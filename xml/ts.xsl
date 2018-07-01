<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:foo="http://www.foo.org/" xmlns:bar="http://www.bar.org">
<xsl:template match="/">
  <html>
  <body>
  <h2>My Movies </h2>
    <table border="1">
      <tr bgcolor="#9acd32">
        <th>Movie Year</th>
         <th>Title</th>
         <th>Country</th>
         <th>Gener</th>
        
      </tr>
      <xsl:for-each select="movies/movie">
      <tr>
        <td><xsl:value-of select="year"/></td>
        <td><xsl:value-of select="title"/></td>
        <td><xsl:value-of select="country"/></td>
        <td><xsl:value-of select="genre"/></td>
       </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>