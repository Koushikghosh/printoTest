<%@ include file="/WEB-INF/views/include.jsp" %>

<c:forEach items="${stateList}" var="state">
    <tr>
        <td>${state.state_id}, ${state.state_name} </td>
        <td>${state.vat_name}</td>
        <td>${state.vat_percentage}</td>
       
    </tr>
</c:forEach>