import mx.core.Window;
import com.adobe.csxs.core.CSXSInterface;
import com.adobe.csxs.types.CSXSWindowType;

public function appComplete():void{
var nPnl:Window = new Window;
nPnl.type =  CSXSWindowType.PANEL;
nPnl.open();
}

appComplete()
