<%@ include file="/WEB-INF/views/include.jsp" %>

<c:forEach items="${productCategoryList}" var="pro">
    <tr>
        <td>${pro.categoryName} </td>
       </tr>
       <tr>
        <td>${pro.categoryOrder}</td>
    </tr>
</c:forEach>