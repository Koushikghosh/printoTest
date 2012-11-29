<%@ include file="/WEB-INF/views/include.jsp" %>
<table>
<c:forEach items="${productList}" var="product">
    <tr>
        <td>${product.name}</td>
        <td>${product.code}</td>
        <td>${product.landingPage}</td>
       
    </tr>
</c:forEach>
</table>