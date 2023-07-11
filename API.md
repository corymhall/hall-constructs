# replace this
# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HallApp <a name="HallApp" id="hall-constructs.HallApp"></a>

#### Initializers <a name="Initializers" id="hall-constructs.HallApp.Initializer"></a>

```typescript
import { HallApp } from 'hall-constructs'

new HallApp(props: HallAppProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hall-constructs.HallApp.Initializer.parameter.props">props</a></code> | <code><a href="#hall-constructs.HallAppProps">HallAppProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="hall-constructs.HallApp.Initializer.parameter.props"></a>

- *Type:* <a href="#hall-constructs.HallAppProps">HallAppProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#hall-constructs.HallApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#hall-constructs.HallApp.synth">synth</a></code> | Synthesize this stage into a cloud assembly. |

---

##### `toString` <a name="toString" id="hall-constructs.HallApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `synth` <a name="synth" id="hall-constructs.HallApp.synth"></a>

```typescript
public synth(options?: StageSynthesisOptions): CloudAssembly
```

Synthesize this stage into a cloud assembly.

Once an assembly has been synthesized, it cannot be modified. Subsequent
calls will return the same assembly.

###### `options`<sup>Optional</sup> <a name="options" id="hall-constructs.HallApp.synth.parameter.options"></a>

- *Type:* aws-cdk-lib.StageSynthesisOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#hall-constructs.HallApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#hall-constructs.HallApp.isStage">isStage</a></code> | Test whether the given construct is a stage. |
| <code><a href="#hall-constructs.HallApp.of">of</a></code> | Return the stage this construct is contained with, if available. |
| <code><a href="#hall-constructs.HallApp.isApp">isApp</a></code> | Checks if an object is an instance of the `App` class. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="hall-constructs.HallApp.isConstruct"></a>

```typescript
import { HallApp } from 'hall-constructs'

HallApp.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="hall-constructs.HallApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStage` <a name="isStage" id="hall-constructs.HallApp.isStage"></a>

```typescript
import { HallApp } from 'hall-constructs'

HallApp.isStage(x: any)
```

Test whether the given construct is a stage.

###### `x`<sup>Required</sup> <a name="x" id="hall-constructs.HallApp.isStage.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="hall-constructs.HallApp.of"></a>

```typescript
import { HallApp } from 'hall-constructs'

HallApp.of(construct: IConstruct)
```

Return the stage this construct is contained with, if available.

If called
on a nested stage, returns its parent.

###### `construct`<sup>Required</sup> <a name="construct" id="hall-constructs.HallApp.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isApp` <a name="isApp" id="hall-constructs.HallApp.isApp"></a>

```typescript
import { HallApp } from 'hall-constructs'

HallApp.isApp(obj: any)
```

Checks if an object is an instance of the `App` class.

###### `obj`<sup>Required</sup> <a name="obj" id="hall-constructs.HallApp.isApp.parameter.obj"></a>

- *Type:* any

The object to evaluate.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hall-constructs.HallApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#hall-constructs.HallApp.property.artifactId">artifactId</a></code> | <code>string</code> | Artifact ID of the assembly if it is a nested stage. The root stage (app) will return an empty string. |
| <code><a href="#hall-constructs.HallApp.property.assetOutdir">assetOutdir</a></code> | <code>string</code> | The cloud assembly asset output directory. |
| <code><a href="#hall-constructs.HallApp.property.outdir">outdir</a></code> | <code>string</code> | The cloud assembly output directory. |
| <code><a href="#hall-constructs.HallApp.property.policyValidationBeta1">policyValidationBeta1</a></code> | <code>aws-cdk-lib.IPolicyValidationPluginBeta1[]</code> | Validation plugins to run during synthesis. |
| <code><a href="#hall-constructs.HallApp.property.stageName">stageName</a></code> | <code>string</code> | The name of the stage. |
| <code><a href="#hall-constructs.HallApp.property.account">account</a></code> | <code>string</code> | The default account for all resources defined within this stage. |
| <code><a href="#hall-constructs.HallApp.property.parentStage">parentStage</a></code> | <code>aws-cdk-lib.Stage</code> | The parent stage or `undefined` if this is the app. |
| <code><a href="#hall-constructs.HallApp.property.region">region</a></code> | <code>string</code> | The default region for all resources defined within this stage. |

---

##### `node`<sup>Required</sup> <a name="node" id="hall-constructs.HallApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="hall-constructs.HallApp.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

Artifact ID of the assembly if it is a nested stage. The root stage (app) will return an empty string.

Derived from the construct path.

---

##### `assetOutdir`<sup>Required</sup> <a name="assetOutdir" id="hall-constructs.HallApp.property.assetOutdir"></a>

```typescript
public readonly assetOutdir: string;
```

- *Type:* string

The cloud assembly asset output directory.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="hall-constructs.HallApp.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

The cloud assembly output directory.

---

##### `policyValidationBeta1`<sup>Required</sup> <a name="policyValidationBeta1" id="hall-constructs.HallApp.property.policyValidationBeta1"></a>

```typescript
public readonly policyValidationBeta1: IPolicyValidationPluginBeta1[];
```

- *Type:* aws-cdk-lib.IPolicyValidationPluginBeta1[]
- *Default:* no validation plugins are used

Validation plugins to run during synthesis.

If any plugin reports any violation,
synthesis will be interrupted and the report displayed to the user.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="hall-constructs.HallApp.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The name of the stage.

Based on names of the parent stages separated by
hypens.

---

##### `account`<sup>Optional</sup> <a name="account" id="hall-constructs.HallApp.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The default account for all resources defined within this stage.

---

##### `parentStage`<sup>Optional</sup> <a name="parentStage" id="hall-constructs.HallApp.property.parentStage"></a>

```typescript
public readonly parentStage: Stage;
```

- *Type:* aws-cdk-lib.Stage

The parent stage or `undefined` if this is the app.

*

---

##### `region`<sup>Optional</sup> <a name="region" id="hall-constructs.HallApp.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The default region for all resources defined within this stage.

---


## Structs <a name="Structs" id="Structs"></a>

### HallAppProps <a name="HallAppProps" id="hall-constructs.HallAppProps"></a>

#### Initializer <a name="Initializer" id="hall-constructs.HallAppProps.Initializer"></a>

```typescript
import { HallAppProps } from 'hall-constructs'

const hallAppProps: HallAppProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hall-constructs.HallAppProps.property.repoName">repoName</a></code> | <code>string</code> | *No description.* |

---

##### `repoName`<sup>Required</sup> <a name="repoName" id="hall-constructs.HallAppProps.property.repoName"></a>

```typescript
public readonly repoName: string;
```

- *Type:* string

---

## Classes <a name="Classes" id="Classes"></a>

### AwsCdkInspector <a name="AwsCdkInspector" id="hall-constructs.AwsCdkInspector"></a>

A utility class that allows you to apply a list of Aspects to a particular Construct Node.

#### Initializers <a name="Initializers" id="hall-constructs.AwsCdkInspector.Initializer"></a>

```typescript
import { AwsCdkInspector } from 'hall-constructs'

new AwsCdkInspector(policies: IAspect[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hall-constructs.AwsCdkInspector.Initializer.parameter.policies">policies</a></code> | <code>aws-cdk-lib.IAspect[]</code> | *No description.* |

---

##### `policies`<sup>Required</sup> <a name="policies" id="hall-constructs.AwsCdkInspector.Initializer.parameter.policies"></a>

- *Type:* aws-cdk-lib.IAspect[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#hall-constructs.AwsCdkInspector.check">check</a></code> | *No description.* |

---

##### `check` <a name="check" id="hall-constructs.AwsCdkInspector.check"></a>

```typescript
public check(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="hall-constructs.AwsCdkInspector.check.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### DevPack <a name="DevPack" id="hall-constructs.DevPack"></a>

A policy pack that makes it easier to cleanup dev environments.

#### Initializers <a name="Initializers" id="hall-constructs.DevPack.Initializer"></a>

```typescript
import { DevPack } from 'hall-constructs'

new DevPack()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#hall-constructs.DevPack.policies">policies</a></code> | *No description.* |

---

##### `policies` <a name="policies" id="hall-constructs.DevPack.policies"></a>

```typescript
import { DevPack } from 'hall-constructs'

DevPack.policies()
```



### KmsKeyPolicy <a name="KmsKeyPolicy" id="hall-constructs.KmsKeyPolicy"></a>

- *Implements:* aws-cdk-lib.IAspect

#### Initializers <a name="Initializers" id="hall-constructs.KmsKeyPolicy.Initializer"></a>

```typescript
import { KmsKeyPolicy } from 'hall-constructs'

new KmsKeyPolicy()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#hall-constructs.KmsKeyPolicy.addError">addError</a></code> | *No description.* |
| <code><a href="#hall-constructs.KmsKeyPolicy.addInfo">addInfo</a></code> | *No description.* |
| <code><a href="#hall-constructs.KmsKeyPolicy.addWarning">addWarning</a></code> | *No description.* |
| <code><a href="#hall-constructs.KmsKeyPolicy.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `addError` <a name="addError" id="hall-constructs.KmsKeyPolicy.addError"></a>

```typescript
public addError(node: IConstruct, policy: IPolicy, message: string): void
```

###### `node`<sup>Required</sup> <a name="node" id="hall-constructs.KmsKeyPolicy.addError.parameter.node"></a>

- *Type:* constructs.IConstruct

---

###### `policy`<sup>Required</sup> <a name="policy" id="hall-constructs.KmsKeyPolicy.addError.parameter.policy"></a>

- *Type:* <a href="#hall-constructs.IPolicy">IPolicy</a>

---

###### `message`<sup>Required</sup> <a name="message" id="hall-constructs.KmsKeyPolicy.addError.parameter.message"></a>

- *Type:* string

---

##### `addInfo` <a name="addInfo" id="hall-constructs.KmsKeyPolicy.addInfo"></a>

```typescript
public addInfo(node: IConstruct, policy: IPolicy, message: string): void
```

###### `node`<sup>Required</sup> <a name="node" id="hall-constructs.KmsKeyPolicy.addInfo.parameter.node"></a>

- *Type:* constructs.IConstruct

---

###### `policy`<sup>Required</sup> <a name="policy" id="hall-constructs.KmsKeyPolicy.addInfo.parameter.policy"></a>

- *Type:* <a href="#hall-constructs.IPolicy">IPolicy</a>

---

###### `message`<sup>Required</sup> <a name="message" id="hall-constructs.KmsKeyPolicy.addInfo.parameter.message"></a>

- *Type:* string

---

##### `addWarning` <a name="addWarning" id="hall-constructs.KmsKeyPolicy.addWarning"></a>

```typescript
public addWarning(node: IConstruct, policy: IPolicy, message: string): void
```

###### `node`<sup>Required</sup> <a name="node" id="hall-constructs.KmsKeyPolicy.addWarning.parameter.node"></a>

- *Type:* constructs.IConstruct

---

###### `policy`<sup>Required</sup> <a name="policy" id="hall-constructs.KmsKeyPolicy.addWarning.parameter.policy"></a>

- *Type:* <a href="#hall-constructs.IPolicy">IPolicy</a>

---

###### `message`<sup>Required</sup> <a name="message" id="hall-constructs.KmsKeyPolicy.addWarning.parameter.message"></a>

- *Type:* string

---

##### `visit` <a name="visit" id="hall-constructs.KmsKeyPolicy.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="hall-constructs.KmsKeyPolicy.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hall-constructs.KmsKeyPolicy.property.description">description</a></code> | <code>string</code> | The description of the policy, i.e. what is the policy evaluating. |
| <code><a href="#hall-constructs.KmsKeyPolicy.property.link">link</a></code> | <code>string</code> | The link to the policy documentation. |
| <code><a href="#hall-constructs.KmsKeyPolicy.property.policyName">policyName</a></code> | <code>string</code> | The name of the policy. |

---

##### `description`<sup>Required</sup> <a name="description" id="hall-constructs.KmsKeyPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the policy, i.e. what is the policy evaluating.

---

##### `link`<sup>Required</sup> <a name="link" id="hall-constructs.KmsKeyPolicy.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

The link to the policy documentation.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="hall-constructs.KmsKeyPolicy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

The name of the policy.

---


### LogGroupShortRetention <a name="LogGroupShortRetention" id="hall-constructs.LogGroupShortRetention"></a>

- *Implements:* aws-cdk-lib.IAspect

#### Initializers <a name="Initializers" id="hall-constructs.LogGroupShortRetention.Initializer"></a>

```typescript
import { LogGroupShortRetention } from 'hall-constructs'

new LogGroupShortRetention()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#hall-constructs.LogGroupShortRetention.addError">addError</a></code> | *No description.* |
| <code><a href="#hall-constructs.LogGroupShortRetention.addInfo">addInfo</a></code> | *No description.* |
| <code><a href="#hall-constructs.LogGroupShortRetention.addWarning">addWarning</a></code> | *No description.* |
| <code><a href="#hall-constructs.LogGroupShortRetention.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `addError` <a name="addError" id="hall-constructs.LogGroupShortRetention.addError"></a>

```typescript
public addError(node: IConstruct, policy: IPolicy, message: string): void
```

###### `node`<sup>Required</sup> <a name="node" id="hall-constructs.LogGroupShortRetention.addError.parameter.node"></a>

- *Type:* constructs.IConstruct

---

###### `policy`<sup>Required</sup> <a name="policy" id="hall-constructs.LogGroupShortRetention.addError.parameter.policy"></a>

- *Type:* <a href="#hall-constructs.IPolicy">IPolicy</a>

---

###### `message`<sup>Required</sup> <a name="message" id="hall-constructs.LogGroupShortRetention.addError.parameter.message"></a>

- *Type:* string

---

##### `addInfo` <a name="addInfo" id="hall-constructs.LogGroupShortRetention.addInfo"></a>

```typescript
public addInfo(node: IConstruct, policy: IPolicy, message: string): void
```

###### `node`<sup>Required</sup> <a name="node" id="hall-constructs.LogGroupShortRetention.addInfo.parameter.node"></a>

- *Type:* constructs.IConstruct

---

###### `policy`<sup>Required</sup> <a name="policy" id="hall-constructs.LogGroupShortRetention.addInfo.parameter.policy"></a>

- *Type:* <a href="#hall-constructs.IPolicy">IPolicy</a>

---

###### `message`<sup>Required</sup> <a name="message" id="hall-constructs.LogGroupShortRetention.addInfo.parameter.message"></a>

- *Type:* string

---

##### `addWarning` <a name="addWarning" id="hall-constructs.LogGroupShortRetention.addWarning"></a>

```typescript
public addWarning(node: IConstruct, policy: IPolicy, message: string): void
```

###### `node`<sup>Required</sup> <a name="node" id="hall-constructs.LogGroupShortRetention.addWarning.parameter.node"></a>

- *Type:* constructs.IConstruct

---

###### `policy`<sup>Required</sup> <a name="policy" id="hall-constructs.LogGroupShortRetention.addWarning.parameter.policy"></a>

- *Type:* <a href="#hall-constructs.IPolicy">IPolicy</a>

---

###### `message`<sup>Required</sup> <a name="message" id="hall-constructs.LogGroupShortRetention.addWarning.parameter.message"></a>

- *Type:* string

---

##### `visit` <a name="visit" id="hall-constructs.LogGroupShortRetention.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="hall-constructs.LogGroupShortRetention.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hall-constructs.LogGroupShortRetention.property.description">description</a></code> | <code>string</code> | The description of the policy, i.e. what is the policy evaluating. |
| <code><a href="#hall-constructs.LogGroupShortRetention.property.link">link</a></code> | <code>string</code> | The link to the policy documentation. |
| <code><a href="#hall-constructs.LogGroupShortRetention.property.policyName">policyName</a></code> | <code>string</code> | The name of the policy. |

---

##### `description`<sup>Required</sup> <a name="description" id="hall-constructs.LogGroupShortRetention.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the policy, i.e. what is the policy evaluating.

---

##### `link`<sup>Required</sup> <a name="link" id="hall-constructs.LogGroupShortRetention.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

The link to the policy documentation.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="hall-constructs.LogGroupShortRetention.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

The name of the policy.

---


### Policy <a name="Policy" id="hall-constructs.Policy"></a>

- *Implements:* <a href="#hall-constructs.IPolicy">IPolicy</a>

Represents an Aspect Policy.

#### Initializers <a name="Initializers" id="hall-constructs.Policy.Initializer"></a>

```typescript
import { Policy } from 'hall-constructs'

new Policy()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#hall-constructs.Policy.addError">addError</a></code> | *No description.* |
| <code><a href="#hall-constructs.Policy.addInfo">addInfo</a></code> | *No description.* |
| <code><a href="#hall-constructs.Policy.addWarning">addWarning</a></code> | *No description.* |

---

##### `addError` <a name="addError" id="hall-constructs.Policy.addError"></a>

```typescript
public addError(node: IConstruct, policy: IPolicy, message: string): void
```

###### `node`<sup>Required</sup> <a name="node" id="hall-constructs.Policy.addError.parameter.node"></a>

- *Type:* constructs.IConstruct

---

###### `policy`<sup>Required</sup> <a name="policy" id="hall-constructs.Policy.addError.parameter.policy"></a>

- *Type:* <a href="#hall-constructs.IPolicy">IPolicy</a>

---

###### `message`<sup>Required</sup> <a name="message" id="hall-constructs.Policy.addError.parameter.message"></a>

- *Type:* string

---

##### `addInfo` <a name="addInfo" id="hall-constructs.Policy.addInfo"></a>

```typescript
public addInfo(node: IConstruct, policy: IPolicy, message: string): void
```

###### `node`<sup>Required</sup> <a name="node" id="hall-constructs.Policy.addInfo.parameter.node"></a>

- *Type:* constructs.IConstruct

---

###### `policy`<sup>Required</sup> <a name="policy" id="hall-constructs.Policy.addInfo.parameter.policy"></a>

- *Type:* <a href="#hall-constructs.IPolicy">IPolicy</a>

---

###### `message`<sup>Required</sup> <a name="message" id="hall-constructs.Policy.addInfo.parameter.message"></a>

- *Type:* string

---

##### `addWarning` <a name="addWarning" id="hall-constructs.Policy.addWarning"></a>

```typescript
public addWarning(node: IConstruct, policy: IPolicy, message: string): void
```

###### `node`<sup>Required</sup> <a name="node" id="hall-constructs.Policy.addWarning.parameter.node"></a>

- *Type:* constructs.IConstruct

---

###### `policy`<sup>Required</sup> <a name="policy" id="hall-constructs.Policy.addWarning.parameter.policy"></a>

- *Type:* <a href="#hall-constructs.IPolicy">IPolicy</a>

---

###### `message`<sup>Required</sup> <a name="message" id="hall-constructs.Policy.addWarning.parameter.message"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hall-constructs.Policy.property.description">description</a></code> | <code>string</code> | The description of the policy, i.e. what is the policy evaluating. |
| <code><a href="#hall-constructs.Policy.property.link">link</a></code> | <code>string</code> | The link to the policy documentation. |
| <code><a href="#hall-constructs.Policy.property.policyName">policyName</a></code> | <code>string</code> | The name of the policy. |

---

##### `description`<sup>Required</sup> <a name="description" id="hall-constructs.Policy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the policy, i.e. what is the policy evaluating.

---

##### `link`<sup>Required</sup> <a name="link" id="hall-constructs.Policy.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

The link to the policy documentation.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="hall-constructs.Policy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

The name of the policy.

---


### Retention <a name="Retention" id="hall-constructs.Retention"></a>

- *Implements:* aws-cdk-lib.IAspect

#### Initializers <a name="Initializers" id="hall-constructs.Retention.Initializer"></a>

```typescript
import { Retention } from 'hall-constructs'

new Retention()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#hall-constructs.Retention.addError">addError</a></code> | *No description.* |
| <code><a href="#hall-constructs.Retention.addInfo">addInfo</a></code> | *No description.* |
| <code><a href="#hall-constructs.Retention.addWarning">addWarning</a></code> | *No description.* |
| <code><a href="#hall-constructs.Retention.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `addError` <a name="addError" id="hall-constructs.Retention.addError"></a>

```typescript
public addError(node: IConstruct, policy: IPolicy, message: string): void
```

###### `node`<sup>Required</sup> <a name="node" id="hall-constructs.Retention.addError.parameter.node"></a>

- *Type:* constructs.IConstruct

---

###### `policy`<sup>Required</sup> <a name="policy" id="hall-constructs.Retention.addError.parameter.policy"></a>

- *Type:* <a href="#hall-constructs.IPolicy">IPolicy</a>

---

###### `message`<sup>Required</sup> <a name="message" id="hall-constructs.Retention.addError.parameter.message"></a>

- *Type:* string

---

##### `addInfo` <a name="addInfo" id="hall-constructs.Retention.addInfo"></a>

```typescript
public addInfo(node: IConstruct, policy: IPolicy, message: string): void
```

###### `node`<sup>Required</sup> <a name="node" id="hall-constructs.Retention.addInfo.parameter.node"></a>

- *Type:* constructs.IConstruct

---

###### `policy`<sup>Required</sup> <a name="policy" id="hall-constructs.Retention.addInfo.parameter.policy"></a>

- *Type:* <a href="#hall-constructs.IPolicy">IPolicy</a>

---

###### `message`<sup>Required</sup> <a name="message" id="hall-constructs.Retention.addInfo.parameter.message"></a>

- *Type:* string

---

##### `addWarning` <a name="addWarning" id="hall-constructs.Retention.addWarning"></a>

```typescript
public addWarning(node: IConstruct, policy: IPolicy, message: string): void
```

###### `node`<sup>Required</sup> <a name="node" id="hall-constructs.Retention.addWarning.parameter.node"></a>

- *Type:* constructs.IConstruct

---

###### `policy`<sup>Required</sup> <a name="policy" id="hall-constructs.Retention.addWarning.parameter.policy"></a>

- *Type:* <a href="#hall-constructs.IPolicy">IPolicy</a>

---

###### `message`<sup>Required</sup> <a name="message" id="hall-constructs.Retention.addWarning.parameter.message"></a>

- *Type:* string

---

##### `visit` <a name="visit" id="hall-constructs.Retention.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="hall-constructs.Retention.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hall-constructs.Retention.property.description">description</a></code> | <code>string</code> | The description of the policy, i.e. what is the policy evaluating. |
| <code><a href="#hall-constructs.Retention.property.link">link</a></code> | <code>string</code> | The link to the policy documentation. |
| <code><a href="#hall-constructs.Retention.property.policyName">policyName</a></code> | <code>string</code> | The name of the policy. |

---

##### `description`<sup>Required</sup> <a name="description" id="hall-constructs.Retention.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the policy, i.e. what is the policy evaluating.

---

##### `link`<sup>Required</sup> <a name="link" id="hall-constructs.Retention.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

The link to the policy documentation.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="hall-constructs.Retention.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

The name of the policy.

---


### S3BucketAutoDelete <a name="S3BucketAutoDelete" id="hall-constructs.S3BucketAutoDelete"></a>

- *Implements:* aws-cdk-lib.IAspect

#### Initializers <a name="Initializers" id="hall-constructs.S3BucketAutoDelete.Initializer"></a>

```typescript
import { S3BucketAutoDelete } from 'hall-constructs'

new S3BucketAutoDelete()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#hall-constructs.S3BucketAutoDelete.addError">addError</a></code> | *No description.* |
| <code><a href="#hall-constructs.S3BucketAutoDelete.addInfo">addInfo</a></code> | *No description.* |
| <code><a href="#hall-constructs.S3BucketAutoDelete.addWarning">addWarning</a></code> | *No description.* |
| <code><a href="#hall-constructs.S3BucketAutoDelete.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `addError` <a name="addError" id="hall-constructs.S3BucketAutoDelete.addError"></a>

```typescript
public addError(node: IConstruct, policy: IPolicy, message: string): void
```

###### `node`<sup>Required</sup> <a name="node" id="hall-constructs.S3BucketAutoDelete.addError.parameter.node"></a>

- *Type:* constructs.IConstruct

---

###### `policy`<sup>Required</sup> <a name="policy" id="hall-constructs.S3BucketAutoDelete.addError.parameter.policy"></a>

- *Type:* <a href="#hall-constructs.IPolicy">IPolicy</a>

---

###### `message`<sup>Required</sup> <a name="message" id="hall-constructs.S3BucketAutoDelete.addError.parameter.message"></a>

- *Type:* string

---

##### `addInfo` <a name="addInfo" id="hall-constructs.S3BucketAutoDelete.addInfo"></a>

```typescript
public addInfo(node: IConstruct, policy: IPolicy, message: string): void
```

###### `node`<sup>Required</sup> <a name="node" id="hall-constructs.S3BucketAutoDelete.addInfo.parameter.node"></a>

- *Type:* constructs.IConstruct

---

###### `policy`<sup>Required</sup> <a name="policy" id="hall-constructs.S3BucketAutoDelete.addInfo.parameter.policy"></a>

- *Type:* <a href="#hall-constructs.IPolicy">IPolicy</a>

---

###### `message`<sup>Required</sup> <a name="message" id="hall-constructs.S3BucketAutoDelete.addInfo.parameter.message"></a>

- *Type:* string

---

##### `addWarning` <a name="addWarning" id="hall-constructs.S3BucketAutoDelete.addWarning"></a>

```typescript
public addWarning(node: IConstruct, policy: IPolicy, message: string): void
```

###### `node`<sup>Required</sup> <a name="node" id="hall-constructs.S3BucketAutoDelete.addWarning.parameter.node"></a>

- *Type:* constructs.IConstruct

---

###### `policy`<sup>Required</sup> <a name="policy" id="hall-constructs.S3BucketAutoDelete.addWarning.parameter.policy"></a>

- *Type:* <a href="#hall-constructs.IPolicy">IPolicy</a>

---

###### `message`<sup>Required</sup> <a name="message" id="hall-constructs.S3BucketAutoDelete.addWarning.parameter.message"></a>

- *Type:* string

---

##### `visit` <a name="visit" id="hall-constructs.S3BucketAutoDelete.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="hall-constructs.S3BucketAutoDelete.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hall-constructs.S3BucketAutoDelete.property.description">description</a></code> | <code>string</code> | The description of the policy, i.e. what is the policy evaluating. |
| <code><a href="#hall-constructs.S3BucketAutoDelete.property.link">link</a></code> | <code>string</code> | The link to the policy documentation. |
| <code><a href="#hall-constructs.S3BucketAutoDelete.property.policyName">policyName</a></code> | <code>string</code> | The name of the policy. |

---

##### `description`<sup>Required</sup> <a name="description" id="hall-constructs.S3BucketAutoDelete.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the policy, i.e. what is the policy evaluating.

---

##### `link`<sup>Required</sup> <a name="link" id="hall-constructs.S3BucketAutoDelete.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

The link to the policy documentation.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="hall-constructs.S3BucketAutoDelete.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

The name of the policy.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IPolicy <a name="IPolicy" id="hall-constructs.IPolicy"></a>

- *Implemented By:* <a href="#hall-constructs.KmsKeyPolicy">KmsKeyPolicy</a>, <a href="#hall-constructs.LogGroupShortRetention">LogGroupShortRetention</a>, <a href="#hall-constructs.Policy">Policy</a>, <a href="#hall-constructs.Retention">Retention</a>, <a href="#hall-constructs.S3BucketAutoDelete">S3BucketAutoDelete</a>, <a href="#hall-constructs.IPolicy">IPolicy</a>

Represents an Aspect policy.

All Aspects should implement this interface


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#hall-constructs.IPolicy.property.description">description</a></code> | <code>string</code> | The description of the policy, i.e. what is the policy evaluating. |
| <code><a href="#hall-constructs.IPolicy.property.link">link</a></code> | <code>string</code> | The link to the policy documentation. |
| <code><a href="#hall-constructs.IPolicy.property.policyName">policyName</a></code> | <code>string</code> | The name of the policy. |

---

##### `description`<sup>Required</sup> <a name="description" id="hall-constructs.IPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the policy, i.e. what is the policy evaluating.

---

##### `link`<sup>Required</sup> <a name="link" id="hall-constructs.IPolicy.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

The link to the policy documentation.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="hall-constructs.IPolicy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

The name of the policy.

---

## Enums <a name="Enums" id="Enums"></a>

### Level <a name="Level" id="hall-constructs.Level"></a>

Represents the warning level if the policy fails.

The error message will be added with the corresponding annotation method, i.e.

cdk.Annotations.of(node).addError|addWarning|addInfo()

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#hall-constructs.Level.WARN">WARN</a></code> | *No description.* |
| <code><a href="#hall-constructs.Level.ERROR">ERROR</a></code> | *No description.* |
| <code><a href="#hall-constructs.Level.INFO">INFO</a></code> | *No description.* |

---

##### `WARN` <a name="WARN" id="hall-constructs.Level.WARN"></a>

---


##### `ERROR` <a name="ERROR" id="hall-constructs.Level.ERROR"></a>

---


##### `INFO` <a name="INFO" id="hall-constructs.Level.INFO"></a>

---

